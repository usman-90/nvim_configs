Vim�UnDo� -J��Օ\+�k���O��^�[�,N�)��f   k   C        const collections = await database_connection(['Partner']);      5                       fX�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             fX�X     �                   �               5��                   k                      �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fX�Z     �                  5��                                                  5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fX�\     �          k      <    async sendExpirationAlerts(): Promise<any | undefined> {�         k              try {�         k      G            const collections = await database_connection(['Partner']);�         k                  if (!collections) {�         k                      return;�         k                  }�      	   k      4            const query: any = { isVerified: true };�      
   k                  console.log(query);�   	      k      @            const partners = await partnerCollection.aggregate([�   
      k                      {�         k                          $project: {�         k      (                        email: '$email',�         k      @                        documents: { $objectToArray: '$proof' },�         k                          },�         k                      },�         k      *                { $unwind: '$documents' },�         k      #                //                {�         k      /                //                    $match: {�         k      I                //                        'documents.v.expirationDate': {�         k      ?                //                            $gte: new Date(),�         k      m                //                            $lte: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),�         k      ,                //                        },�         k      (                //                    },�         k      $                //                },�         k      #                //                {�         k      /                //                    $group: {�         k      6                //                        _id: '$_id',�         k      F                //                        email: { $first: '$email' },�         k      X                //                        documentNames: { $push: '$documents.v.name' },�          k      (                //                    },�      !   k      $                //                },�       "   k                  ]).toArray();�   "   $   k      !            console.log(partners)�   $   &   k      $                console.log(partner)�   %   '   k                  })�   '   )   k      #            if (partners?.length) {�   (   *   k      ;                partners?.forEach(async (partner: any) => {�   )   +   k      7                    await this.mailerService.sendMain({�   *   ,   k      A                        subject: 'Renew Your Moving24 Documents',�   +   -   k      *                        html: ejs.render(`�   U   W   k      ,                            (name: any) => {�   V   X   k      A                                return `<li>${name ?? ' '}</li>`;�   W   Y   k                                  },�   X   Z   k                              )}�   _   a   k      +                        to: partner?.email,�   `   b   k      0                        from: process.env.EMAIL,�   a   c   k                          });�   b   d   k                      })�   c   e   k                  }�   f   h   k              } catch (e) {�   g   i   k                  console.log(e);�   h   j   k      5            throw new InternalServerErrorException();�   i   k   k      	        }�   j                  }5��    j                      �                     �    i                     �                    �    h                     ^                    �    g                     B                    �    f                     ;                     �    f                     ,                    �    c                                         �    b                     	                    �    a                     �                    �    `                     �                    �    _                     �                    �    X                     &                    �    W                                         �    V                      �                     �    U                     �                    �    +                     S                    �    *                                         �    )                     �                    �    (                     �                    �    '                     �                     �    %                     i                    �    $                     D                    �    "                     �                    �                          �                    �                         �                    �                         �                    �                         /                    �                         �                    �                         �                    �                         �                    �                         ]                    �                         8                    �                                             �                         �                    �                         t                    �                         4                    �                         �                    �                         �                    �                         �                    �                         k                    �                         X                    �                         A                    �                                              �                         �                    �                         �                    �    
                     �                    �    	                     d                    �                         D                    �                                             �                         �                     �                         �                     �                         �                      �                         �                     �                         K                     �                         =                     �        9                  9                      �        *                  *                      �        )                  )                      5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             fX�d     �          k      ?    async sendExpirationAlerts(): Promise < any | undefined > {5��        	               	   	               	       5�_�                       5    ����                                                                                                                                                                                                                                                                                                                                                             fX�j     �         k      C        const collections = await database_connection(['Partner']);5��       3                 �                     5�_�                       3    ����                                                                                                                                                                                                                                                                                                                                                             fX�y     �         k      B        const collections = await database_connectio(['Partner']);5��       2                  �                      5�_�                       3    ����                                                                                                                                                                                                                                                                                                                                                             fX�z    �         k      A        const collections = await database_connecto(['Partner']);5��       2                 �                     5�_�                        4    ����                                                                                                                                                                                                                                                                                                                                                             fX�    �         k      B        const collections = await database_connectio(['Partner']);5��       3                 �                     �       3                 �                     5��