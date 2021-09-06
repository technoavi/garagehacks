import React from "react";
import simplify from "simplify-js";

const API_KEY = 'Anj637BlDTyMhOXjonqruz';
const processAPI = 'https://process.filestackapi.com';

export default class Screenshot extends React.Component {
  
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
        isPress: false,
         old : null,
        url: null,
      paths: [ [] ],
      isDrawing: false,
      top: 0,
      left: 0,
      simplify: false,
      simplifyHighQuality: true,
      simplifyThreshold: 3,
      
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const url = `${processAPI}/${API_KEY}/urlscreenshot=agent:desktop/${this.url.value}`;
    this.setState({ url });
  }
  _mousedown = e => {
    this.setState({ isPress : true,  old : {x: e.offsetX, y: e.offsetY} });
   
};

  componentDidMount() {
   const node = this.myRef.current;
   const rect = node.getBoundingClientRect();
   const { left, top } = rect;
   this.setState({ top, left });
  node.addEventListener('mousedown', this._mousedown);

  }

    
  handleMouseDown() {
    if (!this.state.isDrawing) {
      this.setState({
        paths: [].concat(this.state.paths, [[]])
      });
    }
    this.setState({ isDrawing: true });
  };
  
  handleMouseMove(e) {
    if (this.state.isDrawing) {
      const x = e.pageX - this.state.left;
      const y = e.pageY - this.state.top;
      const paths = this.state.paths.slice(0);
      const activePath = paths[paths.length - 1];
      activePath.push({ x, y });
      this.setState({ paths });
    }
  };
  
  handleMouseUp() {
    if (this.state.isDrawing) {
      this.setState({ isDrawing: false });
    }
  };
  
  toggleSimplify() {
     this.setState({ simplify: !this.state.simplify });
  }
  
  setThreshold(e) {
     this.setState({ simplifyThreshold: e.target.value });
  }
  


  render() {
      const { url } = this.state;
    const paths = this.state.paths.map(_points => {
      let path = '';
      let points = _points.slice(0);
      if (this.state.simplify) {
        points = simplify(
          points,
          this.state.simplifyThreshold,
          this.state.simplifyHighQuality
         );
      }
      if (points.length > 0) {
        path = `M ${points[0].x} ${points[0].y}`;
        var p1, p2, end;
        for (var i = 1; i < points.length - 2; i += 2) {
          p1 = points[i];
          p2 = points[i + 1];
          end = points[i + 2];
          path += ` C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${end.x} ${end.y}`;
        }
      }
      return path;
    }).filter(p => p !== '');
    return (
      <div  >
      <h1>Add Image</h1>
       
        <svg
          style={{ border: '1px solid black', cursor: 'crosshair' }}
          width={600}
          height={480}
          ref={this.myRef}
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}
         >
           
          <image x={0} y={0} xlinkHref={url || 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg/600px-pexels-photo-169573.JPEG'} height={480} width={600} />
          {
            paths.map(path => {
              return (<path
                key={path}
                stroke="blue"
                strokeWidth={2}
                d={path}
                fill="none"
              />);
            })
          }
        </svg>
<div className="row">
          <div className="text-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the url..."
                  ref={(input) => this.url = input}
                />
              </div>
             
              <button type="submit" className="btn btn-filestack">
                <i className="glyphicon glyphicon-upload" /> Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
