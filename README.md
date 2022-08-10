<h2>CODE IGNITER 4 </h2>
<h2>LOGIN AND REGISTER</h2>
<h3>LOGIN  E REGITRO DE USUÁRIOS</h3>

**Códigos**
<pre style="background-color:'#E7E9EB'; color:'#000000'">
php composer create-project codeigniter4/apptarter cilogin
php spark create:db ci4login
</pre>

**.env  environment**
>Arquivo importante para a configuração
>Important file to configuration
>ENVIRONMENT = DEVELOPMENT

**Uso do spark**
<pre style="background-color:'#E7E9EB'; color:'#000000'">
php spark migration
</pre>
>migration de usuários em **add/database/migration**

<h3>Instalação</h3>
<li>Substituir a pasta app original pela app disponível  </li>
<li>Realizar a migration </li>
<li>Mudar o ENV para .env e realizar as mudanças padrão do framework </li>
<li>Relizar as mudanças necessárias em app/config/app.php e database.php

  **Installation**
<li>Replace the original app with the available folder</li>
<li>Make the Migration</li>
<li>Make the default changes in the .env</li>
<li>Do the necessary changes in app/config/app.php and database.php
