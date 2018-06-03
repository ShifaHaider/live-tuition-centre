import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactImageCrop from 'react-image-crop-component';
import './Image-20180103_210221.jpg';
import './style.css'


class ImageCropper extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    onCropped(e){
        console.log(e);
        // var image = e[0];

    }
    render(){
        return(
            <div className='imageCrop'>
             <ReactImageCrop src='./Image-20180103_210221.jpg' setWidth={300} setHeight={300}
             square={false} resize={true} border={"dashed #ffffff 2px"} onCrop={this.onCropped.bind(this)}/>
            </div>
        )
    }
}

export default ImageCropper
