<html>
	<head>
		<title>Création Reptile</title>
	</head>

	<body>
		<form action="">
		    <!-- Classe de l'Animal -->
			<input type="radio" name="class" value="Serpentes" checked /> Serpentes	<!-- Serpents -->
			<input type="radio" name="class" value="Testudines" /> Testudines	<!-- Tortues -->
			<input type="radio" name="class" value="Sauriens" /> Sauriens		<!-- Lézards -->
			
			<!-- Famille -->
			<select name="family" required>
				<option value="">Famille</option>
			</select>
			
			<!-- Espèce -->
			<select name="species" required>
				<option value="">Espèce</option>
			</select>
			
			<!-- Informations sur l'Individu -->
			<input type="text" name="name" placeholder="Nom" required>
			<input type="date" name="dateNaiss" required/>
			
			<input type="number" name="size" min="1" placeholder="Taille" required> cm
			<input type="number" name="weight" min="1" placeholder="Poids" required>
			<input type="radio" name="typeWeight" value="g" checked /> g
			<input type="radio" name="typeWeight" value="kg" /> kg
			
            <input type="radio" name="class" value="Serpentes" checked /> Mâle
			<input type="radio" name="class" value="Testudines" /> Femelle	

			<input type="file" name="photo" accept="image/*" required>
			<!-- Validation -->
			<input type="submit" value="Créer Individu">
		</form>
	</body>
</html>
