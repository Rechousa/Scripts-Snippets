::
:: Author      : Pedro Martins
::             : https://www.linkedin.com/in/rechousa
::             : https://twitter.com/rechousapt
::             : http://www.pedromartins.pt
:: Project     : Scripts & Snippets
:: Create date : 2019-09-19 15:48:38
:: Description : Starts a new command line using a different user context
:: Remarks     : 1) Replace your_new_user_account variable
::
@echo off

set user_account="your_new_user_account"

cls

runas /noprofile /user:%user_account% cmd
