const medals = [
  { title: 'Чемпион СССР', count: 13, years: [1961, 1966, 1967, 1968, 1971, 1974, 1975, 1977, 1980, 1981, 1985, 1986, 1990] },
  { title: 'Обладатель Кубка СССР', count: 9, years: [1954, 1964, 1966, 1974, 1978, 1982, 1985, 1987, 1990] },
  { title: 'Обладатель Суперкубка СССР', count: 3, years: [1981, 1986, 1987] },
  { title: 'Чемпион Украины', count: 16, years: [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2003, 2004, 2007, 2009, 2015, 2016, 2021] },
  { title: 'Обладатель Кубка Украины', count: 13, years: [1993, 1996, 1998, 1999, 2000, 2003, 2005, 2006, 2007, 2014, 2015, 2020, 2021] },
  { title: 'Обладатель Суперкубка Украины', count: 9, years: [2004, 2006, 2007, 2009, 2011, 2016, 2018, 2019, 2020] },
  { title: 'Обладатель Кубка кубков УЕФА', count: 2, years: [1975, 1986] },
  { title: 'Обладатель Суперкубка УЕФА', count: 1, years: [1975] },
];

const cups = [
  { name: 'Кубок СССР', count: 9, years: [1954, 1964, 1966, 1974, 1978, 1982, 1985, 1987, 1990] },
  { name: 'Суперкубок СССР', count: 3, years: [1981, 1986, 1987] },
  { name: 'Кубок Украины', count: 13, years: [1993, 1996, 1998, 1999, 2000, 2003, 2005, 2006, 2007, 2014, 2015, 2020, 2021] },
  { name: 'Суперкубок Украины', count: 9, years: [2004, 2006, 2007, 2009, 2011, 2016, 2018, 2019, 2020] },
  { name: 'Кубок обладателей кубков УЕФА', count: 2, years: [1975, 1986] },
  { name: 'Суперкубок УЕФА', count: 1, years: [1975] },
];

const style ={
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    backgroundColor: '#ffffff',
    margin: '8px 0',
    padding: '10px 15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
};

function Display({data}){
    const list = data.map((medal, index) =>
    <li key={index} style = {style.listItem}>
      {medal.name} – {medal.count} раз(а) – {medal.years.join(', ')}
    </li>);
    return(
        <ul style={style.list}>{list}</ul>
    );
}

export function ThirdCard(){
    return(
        <Display data={medals}></Display>
    );
}
