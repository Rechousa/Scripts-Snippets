::
:: Author      : Pedro Martins
::             : https://www.linkedin.com/in/rechousa
::             : https://twitter.com/rechousapt
::             : http://www.pedromartins.pt
:: Project     : Scripts & Snippets
:: Create date : 2019-09-21 16:46:38
:: Description : Recovers a WIFI password on the existing computer
:: Remarks     : The user must enter the WIFI name correctly
::
@echo off

cls

netsh wlan show profile

set /p wifi="Enter the WIFI name to recover the password: "

netsh wlan show profile name=%wifi% key=clear

pause
