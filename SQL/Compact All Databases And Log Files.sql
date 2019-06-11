/*
 * Author      : Pedro Martins
 *             : https://www.linkedin.com/in/rechousa
 *             : https://twitter.com/rechousapt
 *             : http://www.pedromartins.pt
 * Project     : Scripts & Snippets
 * Create date : 2019-06-10 10:26:49
 * Description : Shrinks all databases and log files
 * Remarks     : ---
*/
EXEC sp_MSForEachDB 'DBCC SHRINKDATABASE (''?'' , 0)';
GO
