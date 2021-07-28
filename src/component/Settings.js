import React, { Component, useEffect, PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';

class ImageCrop extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 60,
      aspect: 9 / 9,
    },
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
      document.getElementById("close").style.display = "block";
      document.getElementById("reactCrop").style.display = "block";
    }
  };
  onClose = ()=>{
    document.getElementById("reactCrop").style.display = "none";
    document.getElementById("newImage").style.display = "none";
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <span className="">
        <div>
          <input type="file" accept="image/*" onChange={this.onSelectFile} />
        </div>
        <div id="reactCrop" className="croped">
          {src && (
            <ReactCrop
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
            />
          )}
          <button id="close" className="close" onClick={this.onClose}>x</button>
        </div>
        {croppedImageUrl && (
          /*this will be bushed to api*/
          <img id="newImage" className="user-Newimage" alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )}
        {/*this will be fetched from api*/}
        <img className="user-image" src="../images/User-image.png" alt="camera" />
        <img className="camera" src="../images/camera.png" alt="camera" />
      </span>
    );
  }
}

function Settingsf(){
    const dispatch = useDispatch();
    const isstudent = useSelector((state) => state.typecase.typecase);
    const islogged = useSelector((state) => state.logcase.logcase);
    useEffect(()=>{
        //chack cooki if true then call dispatch(teacher());
        dispatch(teacher());
    }, []);
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    function setLang(e){
      document.getElementById("lang").value = e.target.value;
      if(e.target.value == "EN"){
        document.getElementById("en").style.border = "solid 2px #698B52";
        document.getElementById("ar").style.border = "solid 2px #ffffff";
      }
      else if(e.target.value == "AR"){
        document.getElementById("ar").style.border = "solid 2px #698B52";
        document.getElementById("en").style.border = "solid 2px #ffffff";
      }
    }
    return <div className="page-body">
        <div className="page-div setting-div row justif-content-center">

            <div className="page-left col-11 col-lg-3 row justify-content-center">
                <div className="mail-div">
                </div>
                <div className="nav-div row">
                    <div className="col-12">
                        <Link className="left-items" exact to="/class">
                            <img src="../images/grid.png" alt="grid" />
                            Classes
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-items left-green" exact to="/setting">
                            <img src="../images/grid.png" alt="grid" />
                            Setting
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-items" exact to="/class">
                            <img src="../images/grid.png" alt="grid" />
                            AFQ
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-last" exact to="/class">
                            <p>countinue last course</p>
                            <button>Adobe Illustrator Fundmentals</button>
                        </Link>
                    </div>
                </div>
                <div className="help">
                    <Link exact to="/help">Do you need help?</Link>
                </div>
            </div>

            <div className="page-right col-10 col-xl-7 row">
                <div className="col-12 name row">
                    <span className="image-chang col-12 col-lg-3 justify-content-center">
                        <ImageCrop />
                    </span>
                    <span className="name-chage col-12 col-lg-9 justify-content-center">
                        <div className="input-div">
                            <input type="text" placeholder="Full name" />
                            <hr />
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Career" />
                            <hr />
                        </div>
                    </span>
                </div>
                <div className="col-12 links row">
                    <span className="col-12 col-lg-5 justify-content-around">
                        <div className="input-div">
                            <input type="text" placeholder="Facebook" />
                            <hr />
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Github" />
                            <hr />
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Linkedin" />
                            <hr />
                        </div>
                    </span>
                    <span className="col-12 col-lg-6 justify-content-center">
                        <div className="textarea-div">
                            <textarea type="text" placeholder="Write some thing in 100 letter" ></textarea>
                            <hr />
                        </div>
                    </span>
                </div>
                <div className="col-12 lang row">
                    <span className="col-12 col-lg-5">
                        <span className="lang-btn justify-content-center">
                            {/* we'll add some style function */}
                            <input id="en" className="en" type="button" value="EN" onClick={setLang} />
                            <input id="ar" className="ar" type="button" value="AR" onClick={setLang} />
                            <input id="lang" type="text" hidden />
                        </span>
                    </span>
                    <span className="col-12 col-lg-6 row justify-content-center">
                        <button className="save-btn">Save</button>
                    </span>
                </div>
                <div className="col-12 pay row">
                    <span className="repport col-12 col-lg-5 row">
                        <Link exact to="repport" to="repport">Send repport</Link>
                    </span>
                    <span className="payment col-12 col-lg-6 row justify-content-center">
                    <Link className="col-8" exact to="repport" to="/payment">Go to payment way</Link>
                    </span>
                </div>
            </div>
        
        </div>
        <Footer />
    </div>
}

export class Settings extends Component{
    render(){
        return<div>
            <Nav />
            <Settingsf />
        </div>
    }
}

/*
--this will be the return for all page function
{islogged
        ?this componant
        :<div><Login /></div>
        }
        <Footer />
*/