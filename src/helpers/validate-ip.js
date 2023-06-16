// экспортный модуль

// экспортируем функцию, которая с помощью регулярки проверяеь валидность введённого пользователь ip-адреса
export function ipCheck(ipValid) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipValid)) {
        return true
    }
     
    alert('Your ip is not valid');
    return false
    
}