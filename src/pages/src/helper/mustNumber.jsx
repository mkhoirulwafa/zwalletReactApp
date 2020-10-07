export default function handleChange(e){
    if(isNaN(parseInt(e.target.value))){
        e.target.value = ''
    }
}