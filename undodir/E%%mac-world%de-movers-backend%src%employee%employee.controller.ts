Vim�UnDo� �߮�N{���|���
�វ���y��NJ��pՓ      :            throw new BadRequestExceptio("Id is Required")      (      +       +   +   +    fz�-    _�                        !    ����                                                                                                                                                                                                                                                                                                                                                             fz�G     �                 "export class EmployeeController {}5��       !                  g                      �                          h                      �                          i                      �                          j                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fz�f     �             �             5��                   	       i               `      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz�h     �               %    @UseGuards(AuthGuard, RolesGuard)�                ,import { Controller } from '@nestjs/common';5��              	       	   n       	       	       �              	          n       	              �                                                �                     	   y              	       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz�l     �               $    @UseGuards(AuthGuar, RolesGuard)�                �               %    @UseGuards(AuthGuard, RolesGuard)5��              	       	   �       	       	       �              	          �       	              �                          8               1       �                     	   �              	       5�_�                       $    ����                                                                                                                                                                                                                                                                                                                                                             fz�o     �      	         $    @UseGuards(AuthGuard, RolesGuar)�                �               %    @UseGuards(AuthGuard, RolesGuard)5��              
       
   �       
       
       �              
       	   �       
       	       �                          i               3       �              	       
   �       	       
       5�_�                    	   
    ����                                                                                                                                                                                                                                                                                                                                                             fz�t     �   	                @Role(["admin"])�               2import { RolesGuard } from 'src/auth/roles.guard';�      
             @Roles(["admin"])5��                                            �                                            �                          i               2       �    	                    5                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz�~     �   
                @HttpCode(HttpStatus.OK)�                7import { Controller, UseGuards } from '@nestjs/common';5��    
                    K                    �    
                    K                    �                       
                  
       �    
                    U                    5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             fzւ     �   
                @HttpCode(HttpStatus.OK)�                Aimport { Controller, HttpCode, UseGuards } from '@nestjs/common';5��    
          
       
   ^      
       
       �    
          
       	   ^      
       	       �                                                �    
          	       
   j      	       
       5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             fzօ     �                   @Put("updateAdminPassword")�                Mimport { Controller, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';5��                        ~                    �                        ~                    �        +                  +                      �                        �                    5�_�   	              
      #    ����                                                                                                                                                                                                                                                                                                                                                             fz֊     �               S    async updateAdminPassword(@Body() body: Record<string, any>, @Req() req: any) {�                Rimport { Controller, HttpCode, HttpStatus, Put, UseGuards } from '@nestjs/common';5��                        �                    �                        �                    �        	                  	                      �                        �                    5�_�   
                    E    ����                                                                                                                                                                                                                                                                                                                                                             fz֐     �               S    async updateAdminPassword(@Body() body: Record<string, any>, @Req() req: any) {�                Ximport { Body, Controller, HttpCode, HttpStatus, Put, UseGuards } from '@nestjs/common';5��       B                 �                    �       B                 �                    �        6                  6                      �       B                 �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz֕     �               [        const res = await this.adminService.updateAdminPassword(req.user.id, body.password)5��                         :                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz֖     �               O        const res = await this..updateAdminPassword(req.user.id, body.password)5��                         :                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             fz֙     �      
             constructor�      
             �      	       5��                          /                     �                          /                     �                          /                     �                         /                     �                         4                     �                         8                     �                         7                     �                         6                     �                         5                     �                        4                    �                        4                    �                        4                    5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                             fz֜     �   	            %    constructor (employeeService : E)�                �      
             constructor ()5��                         A                     �                         G                     �                        F                    �       &                  V                     �       %                  U                     �       $                  T                     �       #                 S                    �       #                 S                    �                          �               6       �    	   #                 �                    5�_�                    
   3    ����                                                                                                                                                                                                                                                                                                                                                             fz֥     �   	            3    constructor (employeeService : EmployeeService)5��    	   3                  �                     5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                                             fz֬     �               R        const res = await this.emp.updateAdminPassword(req.user.id, body.password)5��       "                  �                     �                        �                    �                        �                    5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             fzּ    �   	            6    constructor (employeeService : EmployeeService) {}5��    	                     w                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               R        const res = await this.emp.updateAdminPassword(req.user.id, body.password)5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               O        const res = await this..updateAdminPassword(req.user.id, body.password)5��                        �                    �                        �                    �                        �                    �                        �                    5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �                   @Put("updateAdminPassword")5��       
                  	                     5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �                   @Put("")5��       
                  	                     �       
                 	                    �                                            �                                              5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               S    async updateAdminPassword(@Body() body: Record<string, any>, @Req() req: any) {5��       
                  $                     5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               @    async (@Body() body: Record<string, any>, @Req() req: any) {5��       
                  $                     �                         1                     �                        0                    �                         1                     �                         0                     �                        /                    �                         0                     �                        /                    5�_�                       /    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               ^        const res = await this.employeeService.updateAdminPassword(req.user.id, body.password)5��       /                  �                     5�_�                       /    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               K        const res = await this.employeeService.(req.user.id, body.password)5��       .                 �                    �       .                 �                    �       /                  �                     �       .                 �                    �       .                 �                    �       .                 �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz��     �                   @Put("deleteEmployee")5��                                              5�_�                       F    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               ]        const res = await this.employeeService.deleteEmployeeById(req.user.id, body.password)5��       F                  �                     5�_�                       F    ����                                                                                                                                                                                                                                                                                                                                                             fz��     �               Y        const res = await this.employeeService.deleteEmployeeById(req..id, body.password)5��       F                  �                     5�_�                       O    ����                                                                                                                                                                                                                                                                                                                               O          [       v   [    fz��     �               ]        const res = await this.employeeService.deleteEmployeeById(req.body.id, body.password)5��       O                  �                     5�_�                        M    ����                                                                                                                                                                                                                                                                                                                               O          [       v   [    fz��     �               P        const res = await this.employeeService.deleteEmployeeById(req.body.id, )5��       M                  �                     5�_�      !                  M    ����                                                                                                                                                                                                                                                                                                                               O          [       v   [    fz��    �               O        const res = await this.employeeService.deleteEmployeeById(req.body.id )5��       M                  �                     5�_�       "           !      F    ����                                                                                                                                                                                                                                                                                                                               O          [       v   [    fz�    �               N        const res = await this.employeeService.deleteEmployeeById(req.body.id)5��       E                  �                     �       D                  �                     �       C                  �                     �       B                  �                     5�_�   !   #           "      A    ����                                                                                                                                                                                                                                                                                                                               O          [       v   [    fz�
    �   	            >    constructor (private employeeService : EmployeeService) {}5��    	   =                  �                     �    	   (                  �                     �    	                     u                     5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                               O          [       v   [    fz�I     �                   @Put("deleteEmployeeById")5��                                              5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                               O          [       v   [    fz�I    �                   @("deleteEmployeeById")�                ]import { Body, Controller, HttpCode, HttpStatus, Put, Req, UseGuards } from '@nestjs/common';5��                                              �                                            �                                            �                                                �                                            5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                               
                 V   
    fz��     �                   @Roles(["admin"])5��                         �                     5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                               
                 V   
    fz��   	 �                   @Roles([""])5��                      	   �              	       �                        �                    5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                               
                 V   
    fz�     �                       console.log(req.user)5��                         �                     �                        �                    5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                               
                 V   
    fz�   
 �               !        console.log(req.user, "")5��                         �                     �       !                  �                     5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                               
                 V   
    fz�(     �             �             5��                          �              i       5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                               
                 V   
    fz�*     �                #        console.log(req.user, "TH")5��                          z      $               5�_�   *               +      )    ����                                                                                                                                                                                                                                                                                                                               
                 V   
    fz�,    �               ;            throw new BadRequestException("Id is Required")�                eimport { Body, Controller, Delete, HttpCode, HttpStatus, Put, Req, UseGuards } from '@nestjs/common';5��                        �                    �                        �                    �        	                  	                      �                        �                    5��