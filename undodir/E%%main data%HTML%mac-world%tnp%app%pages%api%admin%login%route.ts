Vim�UnDo� ���I��،�Dң�h��R�����LN�3f]iG   4                                   fE#�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             fC�     �         ,      !import prisma from "../../../db";5��                         F                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fC�     �         ,       import prisma from "../.././db";5��                         F                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fC�     �         ,      import prisma from "../..//db";5��                         F                      5�_�                       A    ����                                                                                                                                                                                                                                                                                                                                                             fC�     �         ,      Jimport { comparePasswords, createJWT, hashPassword } from "../../../auth";5��       A                  �                      5�_�                       A    ����                                                                                                                                                                                                                                                                                                                                                             fC�     �         ,      Iimport { comparePasswords, createJWT, hashPassword } from "../.././auth";5��       A                  �                      5�_�                       A    ����                                                                                                                                                                                                                                                                                                                                                             fC�    �         ,      Himport { comparePasswords, createJWT, hashPassword } from "../..//auth";5��       A                  �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fE#<     �      	   -              �      	   ,    5��                          �               	       �                         �                      5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             fE#?    �      	   -              console.log()5��                                              �                                            �                                            �                                            5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             fE#�     �               -   +import { NextResponse } from "next/server";   import prisma from "../../db";   Gimport { comparePasswords, createJWT, hashPassword } from "../../auth";       .export async function POST(request: Request) {   	    try {   )        const req = await request.json();           console.log(req)   console.log("reachedddddd")           // @ts-ignore   9        const user = await prisma.tnp_admins.findUnique({               // @ts-ignore               where: {                   admin_id: 2,               },           });       R        const isValid = await comparePasswords(req.password, user.admin_password);               if (!isValid) {   U            return Response.json({ message: "incorrect password" }, { status: 400 });   	        }           let temp = {               id: user.admin_id,   &            email: user.admin_username   	        }   /        const token = createJWT(temp, "admin");           let userData = {               token,   #            name: user?.admin_name,   *            username: user.admin_username,   %            email: user?.admin_email,   #            role: user?.admin_role,               id: user?.admin_id   
        };               return Response.json(   .            {  message: "success", userData },               { status: 200 },   
        );       } catch (error) {   6        console.error("Error in GET handler:", error);   J        return new NextResponse("Internal Server Error", { status: 500 });       }   }5�5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             fE#�     �                0>>>>>>> 7f19083028340c45aa2ae26892f4e6db545f3ae45��                                1               5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                  V        fE#�    �                <<<<<<< HEAD   	    try {   )        const req = await request.json();           console.log(req)   console.log("reachedddddd")           // @ts-ignore   9        const user = await prisma.tnp_admins.findUnique({               // @ts-ignore               where: {                   admin_id: 2,               },           });   =======5��                          �       5              5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             fE#�     �              5��                          �                     5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        fE#�     �         @      <<<<<<< head5��                        �                     �       	                 �                     �       
                 �                     �                        �                     5��