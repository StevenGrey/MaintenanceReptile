<html>
	<head>
		<title>Création Terrarium</title>
		
			<script type="text/javascript">
				function requis {					
    				var requis="";
    				if(document.forms['createTerrarium'].elements['typeTerrarium'].value != "desert") {
    					requis="required";
    				}
    				alert(requis);
				}
			</script>
	</head> 

	<body>
		<form id="createTerrarium" action="">
			<?php 
			echo "<h4>Nom Terrarium</h4>";
			echo "<input type='text' name='name' value='Terrarium n°" . 1 . "'/>";
			?>
			<!-- Informations sur le Terrarium -->
			<input type="number" name="longueur" min="1" placeholder="Longueur" required> cm
			<input type="number" name="Largeur" min="1" placeholder="Largeur" required> cm
			<input type="number" name="hauteur" min="1" placeholder="hauteur" required> cm
			
			<select name="typeTerrarium" onchange="requis" required>
				<option value="">Type Terrarium</option>
				<option value="desert">Désertique</option>
				<option value="tropical">Tropical</option>
				<option value="aqua">Aquaterrarium</option>
			</select>
			
			<input type="number" name="temp" min="1" placeholder="Température" required> °C

			<?php /*
			if(typeTerrarium == "desert") {
			    $required = "";
			}
			else {
			    $required = "required";
			}
			    
			echo "<input type='number' name='hygro' min='1' placeholder='Hygrométrie' " . $required . "> %";
			*/
			?>
			
			
			<!-- Validation -->
			<input type="submit" value="Créer Terrarium">
		</form>
	</body>
</html>