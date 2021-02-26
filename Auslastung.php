<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de-de" class="" lang="de-de">

<head>
    <meta charset="utf-8">
    <meta name="description" content="Forum by CuzImBisonratte">
    <meta name="keywords" content="CuzImBisonratte, Forum">
    <meta name="author" content="CuzImBisonratte">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav>
        <div class="topnav">
            <a href="index.html">Home</a>
            <a class="active" href="Auslastung.html">Auslastung</a>
            <a href="General.html">General</a>
        </div>
    </nav>
    <main>
    <?php 
        function get_server_load() {
   
            if (stristr(PHP_OS, 'win')) {
           
                $wmi = new COM("Winmgmts://");
                $server = $wmi->execquery("SELECT LoadPercentage FROM Win32_Processor");
               
                $cpu_num = 0;
                $load_total = 0;
               
                foreach($server as $cpu){
                    $cpu_num++;
                    $load_total += $cpu->loadpercentage;
                }
               
                $load = round($load_total/$cpu_num);
               
            } else {
           
                $sys_load = sys_getloadavg();
                $load = $sys_load[0];
           
            }
           
            return (int) $load;
       
        }
        echo get_server_load();
        ?>
        <button onclick="topFunction()" id="myBtn" title="Go to top">^</button>
</main>
</body>

</html>