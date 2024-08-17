const useGroupByLetter = (arr) => {
  const grouped = {};

  arr.forEach((obj) => {
    const letter = obj.title.charAt(0).toUpperCase(); // Первая буква в верхнем регистре
    if (!grouped[letter]) {
      grouped[letter] = []; // Если ещё нет такой группы, создаем её
    }
    grouped[letter].push(obj); // Добавляем в соответствующую группу
  });

  // Преобразуем объект в массив для использования в компоненте
  return Object.keys(grouped).map((letter) => ({
    letter,
    arr: grouped[letter],
  }));
};

export default useGroupByLetter;
