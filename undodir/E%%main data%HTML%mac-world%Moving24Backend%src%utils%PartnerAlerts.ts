Vim�UnDo� ��B�����șo�$'�A�d��L���xR�U                                      fX�    _�                        5    ����                                                                                                                                                                                                                                                                                                                                                             fX�     �         k      C        const collections = await database_connection(['Partner']);5��       3                 �                     �       2                 �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fX�     �          k      H    async function sendExpirationAlerts(): Promise < any | undefined > {5��                                                �                                               �                                                �                                                �                                                  �                                                  �                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fX�     �          m       5��                                                  �                                              �                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fX�     �          m      	import {}5��                                                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fX�$     �          m      import {database_connection}5��                       	                  	       �        $                  $                      5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             fX�(     �          m      $import {database_connection} from ''5��        #                  #                      �        $                 $                     5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                             fX�,     �          m      &import {database_connection} from './'5��        $                 $                     �        $                 $                     5�_�      	                 $    ����                                                                                                                                                                                                                                                                                                                                                             fX�.     �                 &import {database_connection} from './'5��                                   '               5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             fX�/    �                  5��                                                  5�_�   	              
      "    ����                                                                                                                                                                                                                                                                                                                                                             fX�E     �         k      C        const collections = await database_connection(['Partner']);5��       "                  q                      5�_�   
                    "    ����                                                                                                                                                                                                                                                                                                                                                             fX�E    �         k      0        const collections = await (['Partner']);5��       "                  q                      �       "              	   q              	       �       *                 y                     �       +              
   z              
       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fX�e     �          k      Dasync function sendExpirationAlerts(): Promise < any | undefined > {5��                                                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fX�e     �         l    �         l    5��                                         -       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fX�f     �                  5��                                                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fX�g    �         l    5��                          -                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fX�     �         m    �         m    5��                          -                      5�_�                             ����                                                                                                                                                                                                                                                                                                                                       n           V        fX�    �              n   ,import { database_connection } from '../db';   const ejs = require('ejs');       Dasync function sendExpirationAlerts(): Promise < any | undefined > {   	    try {   C        const collections = await database_connection(['Partner']);           if(!collections) {               return;   	        }   5            const partnerCollection = collections[0];   0        const query: any = { isVerified: true };           console.log(query);   <        const partners = await partnerCollection.aggregate([               {                   $project: {   $                    email: '$email',   <                    documents: { $objectToArray: '$proof' },                   },               },   &            { $unwind: '$documents' },               //                {   +            //                    $match: {   E            //                        'documents.v.expirationDate': {   ;            //                            $gte: new Date(),   i            //                            $lte: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),   (            //                        },   $            //                    },                //                },               //                {   +            //                    $group: {   2            //                        _id: '$_id',   B            //                        email: { $first: '$email' },   T            //                        documentNames: { $push: '$documents.v.name' },   $            //                    },                //                },           ]).toArray();               console.log(partners)   0            partners.forEach((partner: any) => {                console.log(partner)   
        })       "            if(partners?.length) {   7            partners?.forEach(async (partner: any) => {   3                await this.mailerService.sendMain({   =                    subject: 'Renew Your Moving24 Documents',   &                    html: ejs.render(`   8                                         <!DOCTYPE html>   <html lang="en">   <head>       <meta charset="UTF-8">   J    <meta name="viewport" content="width=device-width, initial-scale=1.0">   -    <title>Moving Request Information</title>       <style>           body {   +            font-family: Arial, sans-serif;               margin: 0;               padding: 0;   &            background-color: #f4f4f4;   	        }           .container {               max-width: 600px;               margin: 20px auto;   #            background-color: #fff;               padding: 20px;               border-radius: 8px;   1            box-shadow: 0 0 10px rgba(0,0,0,0.1);   	        }           .field {                margin-bottom: 10px;   	        }           .field label {               font-weight: bold;   	        }           .field span {               color: #666;   	        }       </style>   </head>   <body>       <div class="container">       <h1>Hi</h1>       <h3>   S    Your Following documents are going to expire with in a week, Kindly renew them.           </h3>           <ol>   .                ${partner?.documentNames?.map(   (                        (name: any) => {   =                            return `<li>${name ?? ' '}</li>`;                           },                       )}   	    </ol>   
    </div>   </body>   </html>       ,                                         `),   '                    to: partner?.email,   ,                    from: process.env.EMAIL,                   });               })   	        }               } catch(e) {           console.log(e);   1        throw new InternalServerErrorException();       }   }5��            n                      #             5��