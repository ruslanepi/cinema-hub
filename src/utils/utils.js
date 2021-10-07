const getStringGenres = (array) => {
  const newArray = []
  array.forEach((element) => {
    switch (element) {
      case 28:
        newArray.push('Action')
        break
      case 12:
        newArray.push('Adventure')
        break
      case 16:
        newArray.push('Animation')
        break
      case 36:
        newArray.push('Comedy')
        break
      case 80:
        newArray.push('Crime')
        break
      case 99:
        newArray.push('Documentary')
        break
      case 18:
        newArray.push('Drama')
        break
      case 14:
        newArray.push('Fantasy')
        break
      case 36:
        newArray.push('History')
        break
      case 27:
        newArray.push('Horror')
        break
      case 10402:
        newArray.push('Music')
        break
      case 9648:
        newArray.push('Mystery')
        break
      case 10749:
        newArray.push('Romance')
        break
      case 878:
        newArray.push('Science Fiction')
        break
      case 10770:
        newArray.push('TV Movie')
        break
      case 53:
        newArray.push('Thriller')
        break
      case 10752:
        newArray.push('War')
        break
      case 37:
        newArray.push('Western')
        break
      default:
        return []
    }
  })

  return newArray
}

export default getStringGenres
