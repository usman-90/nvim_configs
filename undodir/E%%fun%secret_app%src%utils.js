Vim�UnDo� ��O����,��� Ι���L�&r�r��,�H      export function reset(value) {            C       C   C   C    f�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             fz     �                  �               �               5��                                                �                   
                            5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             fz     �               :import { getDatabase, ref, set } from "firebase/database";5��       	                  
                      5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             fz     �               /import { , ref, set } from "firebase/database";5��       	                  
                      5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             fz	    �                �             5��                          0                      �                          0                      �                         0                     �                         0                     �                      &   0              &       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz     �                 const db = getDatabase();5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz     �                 const db = ();5��                         �                      �                        �                     �                        �                     �                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             fz     �                  const db = database();5��                          �                      5�_�      	                 
    ����                                                                                                                                                                                                                                                                                                                                                             fz     �               #  set(ref(db, 'users/' + userId), {5��       
                  �                      5�_�      
           	      
    ����                                                                                                                                                                                                                                                                                                                                                             fz    �               !  set(ref(, 'users/' + userId), {5��       
                  �                      �       
                 �                     �       
                 �                     �       
                 �                     5�_�   	              
      	    ����                                                                                                                                                                                                                                                                                                                                                             fz�     �               7function writeUserData(userId, name, email, imageUrl) {5��       	                  a                      5�_�   
                    	    ����                                                                                                                                                                                                                                                                                                                                                             fz�     �               *function (userId, name, email, imageUrl) {5��       	                  a                      �       	                 a                     �       
                 b                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             f{v     �               )  set(ref(database, 'users/' + userId), {5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             f{v     �               $  set(ref(database, '/' + userId), {5��                         �                      �                        �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             f{{     �               *  set(ref(database, 'secret/' + userId), {5��                          �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             f{|     �               $  set(ref(database, 'secret/' + ), {5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             f{}     �               !  set(ref(database, 'secret/'), {5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               3function increment(userId, name, email, imageUrl) {5��                         l                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               .function increment(u, name, email, imageUrl) {5��                        k                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               2function increment(value, name, email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               1function increment(value name, email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               0function increment(valuename, email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               /function increment(valueame, email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               .function increment(valueme, email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               -function increment(valuee, email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               ,function increment(value, email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               +function increment(value email, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               *function increment(valueemail, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               )function increment(valuemail, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               (function increment(valueail, imageUrl) {5��                         p                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               'function increment(valueil, imageUrl) {5��                         p                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               &function increment(valuel, imageUrl) {5��                         p                      5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               %function increment(value, imageUrl) {5��                         p                      5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               $function increment(value imageUrl) {5��                         p                      5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               #function increment(valueimageUrl) {5��                         p                      5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               "function increment(valuemageUrl) {5��                         p                      5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               !function increment(valueageUrl) {5��                         p                      5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �                function increment(valuegeUrl) {5��                         p                      5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               function increment(valueeUrl) {5��                         p                      5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               function increment(valueUrl) {5��                         p                      5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               function increment(valuerl) {5��                         p                      5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �               function increment(valuel) {5��                         p                      5�_�   )   +           *           ����                                                                                                                                                                                                                                                                                                                                      	          V       f{�     �                    email: email,       profile_picture : imageUrl5��                          �       1               5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �         
          username: name,5��                         �                      5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �         
          : name,5��                         �                      5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                V       f{�     �         
          value: name,5��                         �                      5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                                                V       f{�    �         
          value: ,5��                         �                      �                        �                     �                        �                     5�_�   .   0           /   
        ����                                                                                                                                                                                                                                                                                                                                      	          V       f{�     �   
            �   
            5��    
                      �               a       5�_�   /   1           0      	    ����                                                                                                                                                                                                                                                                                                                                      	          V       f{�     �   
            function increment(value) {5��    
   	       	           �       	               5�_�   0   2           1      	    ����                                                                                                                                                                                                                                                                                                                                      	          V       f{�     �   
            function (value) {5��    
   	                  �                      �    
   	                 �                     5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                      	          V       f{�     �                   value: value + 1,5��              
                 
               5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                                      	          V       f{�    �                   value: 5��                                              5�_�   3   5           4           ����                                                                                                                                                                                                                                                                                                                                                V       f|     �                  �               5��                                               �                                               �                                               �                                               5�_�   4   6           5           ����                                                                                                                                                                                                                                                                                                                                                V       f|     �   
            function reset(value) {5��    
                      �                      5�_�   5   7           6           ����                                                                                                                                                                                                                                                                                                                                                V       f|     �               function increment(value) {5��                          X                      5�_�   6   8           7           ����                                                                                                                                                                                                                                                                                                                                                V       f|     �                  5��                                               �                        )                    �                        )                    �                     	   )             	       �                         1                     �                         0                     �                        /                    �                        /                    �                        2                    5�_�   7   9           8          ����                                                                                                                                                                                                                                                                                                                                                V       f|!     �                 export function login()5��                         3                     5�_�   8   :           9      )    ����                                                                                                                                                                                                                                                                                                                                                V       f|&     �                 )export function login(userName, password)5��       )                  F                     �       )                 F                    5�_�   9   ;           :      *    ����                                                                                                                                                                                                                                                                                                                                                V       f|'     �                 +export function login(userName, password){}5��       *                  G                     5�_�   :   <           ;           ����                                                                                                                                                                                                                                                                                                                                                V       f|(     �                   �             5��                          H                     �                          H                     �                        L                    5�_�   ;   =           <          ����                                                                                                                                                                                                                                                                                                                                                V       f|�     �               &import { database } from "./firebase";5��                         B                      �                        D                     �                        D                     �                        D                     �                        D                     5�_�   <   >           =           ����                                                                                                                                                                                                                                                                                                                                                V       f|�     �                  �               �               5��                          W                     �                   	      W              �       5�_�   =   ?           >          ����                                                                                                                                                                                                                                                                                                                                                V       f|�     �               0signInWithEmailAndPasswor(auth, email, password)�                �               1signInWithEmailAndPassword(auth, email, password)5��                         W                    �                         W                    �                          ^               <       �                         �                    5�_�   >   @           ?          ����                                                                                                                                                                                                                                                                                                                                                 V       f|�     �                *export function login(userName, password){           }5��                          `      3               5�_�   ?   A           @          ����                                                                                                                                                                                                                                                                                                                                                 V       f�0   	 �                   value: 05��                     
   U             
       5�_�   @   B           A          ����                                                                                                                                                                                                                                                                                                                                                 V       f�     �                 });5��                         d                     �                         d                     5�_�   A   C           B          ����                                                                                                                                                                                                                                                                                                                                                 V       f�   
 �               &  set(ref(database, 'secret/value'), {5��                         %                     5�_�   B               C          ����                                                                                                                                                                                                                                                                                                                                                 V       f�    �               export function reset(value) {5��                                              5��