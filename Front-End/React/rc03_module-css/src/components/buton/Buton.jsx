import btnStyle from './buton.module.css'

const Buton = ({btnName}) => {
  return (
    <div className={btnStyle['title']}>

        <button className={btnStyle['btn-blue']}>{btnName}</button>
    </div>
  )
}

export default Buton