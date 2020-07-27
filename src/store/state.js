let defalutCity = '北京'
try {
  if (localStorage.city) {
    defalutCity = localStorage.city
  }
} catch (error) {

}

export default {
  city: defalutCity
}
