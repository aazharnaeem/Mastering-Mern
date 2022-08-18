import {useState} from 'react';


const AddBlogs = () => {
    const [description, setdesc] = useState('')
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');

    const changeHandler = (e) => {
        const value = e.target.value;
        setdesc(value)
    }
    const uploadHandler = (e) => {
        setImage(e.target.files[0])
        setPreview(e.target.files[0])
    }

    const submit = async (e) => {
        e.preventDefault();

        // const { public_id, url } = await uploadImage(image)


        // const obj = {
        //     description: description,
        //     public_id: public_id,
        //     url: url
        // }

        setdesc('');
        setImage('');
        setPreview('')
    }
    return (
        <div>

            <div
                style={{
                    maxWidth: "80vh",
                    margin: "0 auto",
                    padding: "10px",
                    marginTop: '10px'
                }}
            >
                <form onSubmit={submit} >
                    <input
                        style={{ maxWidth: '100%' }}
                        type='text'
                        name='description'
                        placeholder="add description"
                        value={description}
                        size='40'
                        onChange={(e) => changeHandler(e)}
                    />

                    <label htmlFor='img'
                        style={{
                            border: 'solid black 1px',
                            padding: '5px',
                        }}
                    >AddImage</label>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        id='img'
                        name='file'
                        onChange={(e) => uploadHandler(e)}
                    />
                    <input type='submit' value='upload' />

                </form>
                <button style={{
                    display: preview ? 'block' : 'none',
                    position: "right",
                    border: "solid black 1px",
                    borderRadius: "50%",
                    maxWidth: "100%"

                }} onClick={
                    () => {
                        setPreview('')
                    }} >x</button>
                <img
                    style={{
                        display: preview ? 'block' : 'none',
                        height: "15%",
                        maxWidth: "50%",
                    }}
                    alt=' '
                    src={image ? window.URL.createObjectURL(image) : ''}
                />

            </div>
        </div>
    )
}
export default AddBlogs;