import React,{useState} from 'react';

export default function Test(props) {
    const[enteredData, setEnteredData]=useState('');
    const titleChangeHandler =(e)=>{
        setEnteredData(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const data = {
            data: enteredData
        }
        props.onAddData(data);
        // console.log(data)
    }
  return <div>
      <form onSubmit={submitHandler}>
                <div>
                    <input type='text' value={enteredData}  onChange={titleChangeHandler} />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
        </form>
  </div>;
}
