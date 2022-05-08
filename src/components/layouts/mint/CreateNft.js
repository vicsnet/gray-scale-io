import React from 'react'
import styled from 'styled-components'

function CreateNft() {
  return (
      <Container>
          <Wrap>
          <form action="/" method="get">
                  <h1>Upload Your metarverse land</h1>
                  
                  <label >Image, Video, Audio, or 3D Model<span>*</span> </label>
                  <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p><br />
              <Input>
              
                <br />
                      <input type="file" name="" id="" /> <br />
                  </Input>
                  
              <label >Name <span>*</span></label><br />
              <Input>
              <input type="text" name="" id="" placeholder=" Metaverse Land Name " /><br />
            </Input>
                  
                  <label htmlFor="">External Link</label>
                  <p>GreyScale will include a link to this
                          URL on this item's detail page, so that users
                          can click to learn more about it.
                          You are welcome to link to your own webpage
                          with more details.</p><br />
              <Input>
              <input type="text" placeholder="https://yoursite.com/item/123" />
              </Input>

              <label htmlFor="">Description</label>
              <p>the description will be included on the item's
                      detail page underneath its image. Markdown syntax is supported.</p>
                  
                <Input>
              <input type="text" placeholder='provide a detailed description of your item' />
              </Input>

              <label htmlFor="">Supply</label>
              <p>The number of items that can be minted. No gas cost to you! </p>
              <Input>
              <input type="text" />
              </Input>

              <button>Create</button>
              </form>
              </Wrap>
    </Container>
  )
}

export default CreateNft

const Container = styled.div`
width:100%;
font-family: inter;
padding: 0 10px;




`
const Wrap = styled.div`
max-width: 800px;
width: 100%;
background: #fff;
margin: 20px auto;
padding: 30px;
box-shadow: 1px 1px 2px rgba(0,0,0,0.125);

h1{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #043547;
    text-transform: uppercase;
    text-align: center;
}

form{
    width: 100%;
    label{
        width: 700px;
        color: #757577;
        font-size: 18PX;

    span{
        color: red;
    }
    
}

p{
    font-size: 10px;
    color: #757575;
}
}
button{
    width: 100%;
    padding: 8px 10px;
    font-size 15px;
    border: 0;
    cursor: pointer;
    color: #F7FDF9;
    border-radius: 3px;
    outline: none;
    background: #7FEDE2;
}

`
const Input = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    input{

        width: 100%;
        outline: none;
        border: 1px solid #d5dbd9;
        font-size: 15px;
        padding: 8px 10px;
        border-radius: 3px;
        transition: all 0.3s ease;
    }
    
    

`