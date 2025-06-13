const players = [
  { name: 'Георгий Бущан', position: 'Вратарь' },
  { name: 'Александр Караваев', position: 'Защитник' },
  { name: 'Илья Забарный', position: 'Защитник' },
  { name: 'Миккель Дуелунд', position: 'Полузащитник' },
  { name: 'Владислав Дубинчак', position: 'Защитник' },
  { name: 'Николай Шапаренко', position: 'Полузащитник' },
  { name: 'Сергей Сидорчук', position: 'Полузащитник' },
  { name: 'Виктор Цыганков', position: 'Полузащитник' },
  { name: 'Владислав Ванат', position: 'Нападающий' },
  { name: 'Артем Беседин', position: 'Нападающий' },
  { name: 'Денис Гармаш', position: 'Полузащитник' },
  { name: 'Томаш Кендзёра', position: 'Защитник' }
];


export function SecondCard(){
    const list = players.map(player=>
        <li style={{ listStyleType: 'none' }}>{player.name} - {player.position}</li>
    );
    return(
        <ul>{list}</ul>
    );
}
