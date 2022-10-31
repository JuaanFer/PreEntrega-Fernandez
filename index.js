const presentismo=5000
const hsVend=400
const hsDeposito=350
const hsAdmin=380

alert("Bienvenido a su asistente de liquidacion de sueldos")
let cont = parseInt(prompt('Ingrese la cantidad de sueldos a liquidar: '))


for(i=1;i<=cont;i++){
    let nombre = prompt('Ingrese el nombre del empleado: ')
    let puesto = parseInt(prompt('A que sector corresponde: 1-Ventas, 2-Deposito, 3-Administracion'))
    let hsTrab = parseInt(prompt('Ingrese las horas trabajadas en el mes: '))
    let present = parseInt(prompt('Le corresponde el presentismo?: 1-Si, 2-No'))
    let bono = parseInt(prompt('Le corresponde el aguinaldo?: 1-Si, 2-No'))
    let totalSueldo = sueldo(puesto,hsTrab,present,bono)
    console.log(totalSueldo)
    alert(`El sueldo que le corresponde a ${nombre} es: ${totalSueldo}`)
}

function sueldo(puesto,hsT,present,bono){
    let total = 0
    if(puesto === 1){
        total = hsVend*hsT
        if(present === 1){
            total += presentismo
        }
        if(bono === 1){
            total += total/2
        }
    }else if(puesto === 2){
        total=hsDeposito*hsT
        if(present === 1){
            total += presentismo
        }
        if(bono === 1){
            total += total/2
        }
    }else if(puesto === 3){
        total=hsAdmin*hsT
        if(present ===1 ){
            total += presentismo
        }
        if(bono === 1){
            total += total/2
        }
    }
    return total
}

