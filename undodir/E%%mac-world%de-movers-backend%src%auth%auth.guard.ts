Vim�UnDo� 윺�/��8ܾǔw��҉u]�����`Qc3�   "     CanActivate,                              fz��    _�                            ����                                                                                                                                                                                                                                                                                                                                                             fz�k     �         '              �         &    5��                          1                     �                         1                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz�m     �         '              console.log()5��                         E                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz�o     �         '              console.log("")5��                         F                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz�q    �         '              console.log("Invokde")5��                         N                     �       !                 R                    5�_�                            ����                                                                                                                                                                                                                                                                                                                               #          #       V   #    fz؀     �                %        console.log("Invokde", token)�         (      %        console.log("Invokde", token)�         '    5��                        1      &       Z      �                         Z                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        fz�    �                #      console.log("Invokde", token)5��                          Z      $               5�_�                       0    ����                                                                                                                                                                                                                                                                                                                                                  V        fz�F    �         &      ?    console.log(token, 'TOken', request.headers.Authorization);5��       0                                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                         <       v   <    fz��    �         &      ?    console.log(token, 'TOken', request.headers.authorization);5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                         <       v   <    fz��   	 �         &           console.log(token, 'TOken');5��                         �                     �                         �                    �                         �                    �                         �                    �       '                                     �       )                                     �       .                                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                         <       v   <    fz�     �                	    try {5��                          Y      
               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V   ?    fz�   
 �                    } catch {   (      throw new UnauthorizedException();       }5��                                =               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V   ?    fz��     �         "      '        secret: process.env.JWT_SECRET,5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V   ?    fz��     �         "      )        secret:"" process.env.JWT_SECRET,�         "    5��                      &   �              &       5�_�                       8    ����                                                                                                                                                                                                                                                                                                                                                V   ?    fz��    �         "      O        secret:"helloworldadfjkasdfn39248nasfnq938ruiu" process.env.JWT_SECRET,5��       8                  �                     5�_�                        7    ����                                                                                                                                                                                                                                                                                                                                                V   ?    fz��    �         "        CanActivate,�         "        ExecutionContext,�         "        Injectable,�         "        UnauthorizedException,�         "      0  constructor(private jwtService: JwtService) {}�         "      B  async canActivate(context: ExecutionContext): Promise<boolean> {�         "      8    const request = context.switchToHttp().getRequest();�         "      7    const token = this.extractTokenFromHeader(request);�         "      8    console.log(token, 'TOken', process.env.JWT_SECRET);�         "          if (!token) {�         "      (      throw new UnauthorizedException();�         "          }�         "      @      const payload = await this.jwtService.verifyAsync(token, {�         "      8        secret:"helloworldadfjkasdfn39248nasfnq938ruiu" �         "      	      });�         "      ,      console.log(payload, 'hello payload');�         "             request['user'] = payload;�         "          return true;�         "        }�         "      H  private extractTokenFromHeader(request: Request): string | undefined {�          "      J    const [type, token] = request.headers.authorization?.split(' ') ?? [];�      !   "      1    return type === 'Bearer' ? token : undefined;�       "   "        }5��                                              �                         �                    �                         �                    �                         A                    �                         <                    �                         +                    �                         
                    �                         �                    �                         �                    �       7                  �                     �                         �                     �                         �                    �                         Y                    �                         S                    �                         *                    �                                             �                         �                    �                         �                    �                         n                    �                         +                    �       /                  (                     �                         �                     �                         :                     �                         ,                     �                                              �                         	                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V   #    fz؀    �         '      #      console.log("Invokde", token)�         (    �                !    console.log("Invokde", token)5��                        Z      $       `      �                         `                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V   #    fz؏     �         '      !    console.log("Invokde", token)�         (    �                %        console.log("Invokde", token)5��                        `      "       j      �                         j                    5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                  V   #    fz؏     �         '      %        console.log("Invokde", token)�         (    �                '          console.log("Invokde", token)5��                        j      &       �      �                      
   �             
       5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                  V   #    fz؏     �         '      '          console.log("Invokde", token)�         (    �                %        console.log("Invokde", token)5��                        �      (       �      �               
          �      
              5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  V   #    fzؑ     �         '      %        console.log("Invokde", token)�         (    �                #      console.log("Invokde", token)5��                        �      &       �      �                         �                    5�_�   
                    "    ����                                                                                                                                                                                                                                                                                                                                                V       fz؟    �         '      ,      console.log("Invokde", token, payload)5��       "               	   �              	       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �         '    �         '      (      throw new UnauthorizedException();5��                          7              )       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �         (      (      throw new UnauthorizedException();�         )    �                (      throw new UnauthorizedException();5��                        7      )       X      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �         (      (      throw new UnauthorizedException();�         )    �                (      throw new UnauthorizedException();5��                        X      )       7      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �              5��                          j      s               5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �         %      +      console.log("Invokde", token, ayload)5��       $                  �                     5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �         %      %      console.log("Invokde", token, )5��       $                  �                     5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �         %      $      console.log("Invokde", token )5��       "                  �                     5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                                V   "    fz��    �              5��                          �      -               5�_�                             ����                                                                                                                                                                                                                                                                                                                                                V   "    fz��    �         $      "//      request['user'] = payload;5��                          �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       fz��     �              5��                          j      s               5��