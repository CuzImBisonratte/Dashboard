@set var = wmic cpu get loadpercentage
%var | ForEach-Object {$_ -Replace "[^0-9]", ""} > output.txt
@echo %var