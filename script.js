let cantidad, suma , promedio
suma=0
do {
cantidad= parseFloat(prompt("Ingrese Cantidad de notas"))
} while (isNaN (cantidad))

for (let i =1; i <= cantidad;i++) {
     let nota= parseFloat(prompt("Ingrese nota"))
     if (nota >= 0 && nota <=10)
      suma= nota + suma
      else i= i-1
}
alert (promedio= suma / cantidad)

if (promedio <= 5){
    alert("Contenidos Pendintes")
}
    else if (promedio > 5 && promedio <=10){
        alert("Contenidos Aprobados")
    } 
         else 
         alert("Promdio Mal Calculado")  






