/*
 * Author      : Pedro Martins
 *             : https://www.linkedin.com/in/rechousa
 *             : https://twitter.com/rechousapt
 *             : http://www.pedromartins.pt
 * Project     : Scripts & Snippets
 * Create date : 2019-06-18 17:29:17
 * Description : Maps an existing database user to a SQL Server login
 * Remarks     : ---
*/
USE [my_database_name];
GO

EXEC sp_change_users_login 'AUTO_FIX', 'my_user_name';
GO
