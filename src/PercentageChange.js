import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import MathJax from "mathjax";

class PercentageChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initPrice: "",
      finalPrice: "",
      formula: "",
      change: ""
    };
  }

  // mathJaxSetup = () => {
  //   var script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.src = "/MathJax/MathJax.js"; // use the location of your MathJax

  //   var config =
  //     "MathJax.Hub.Config({" +
  //     'extensions: ["tex2jax.js"],' +
  //     'jax: ["input/TeX","output/HTML-CSS"]' +
  //     "});" +
  //     "MathJax.Hub.Startup.onload();";

  //   if (window.opera) {
  //     script.innerHTML = config;
  //   } else {
  //     script.text = config;
  //   }

  //   script.addEventListener("load", function() {
  //     MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  //   });

  //   document.getElementsByTagName("head")[0].appendChild(script);
  // };

  // componentDidMount() {
  //   this.mathJaxSetup();
  // }

  // componentDidUpdate() {
  //   this.mathJaxSetup();
  // }

  handleChange = event => {
    if (event.target.name === "initPrice") {
      this.setState({ initPrice: event.target.value });
    } else {
      this.setState({ finalPrice: event.target.value });
    }
  };

  calculate = event => {
    const v1 = parseFloat(this.state.initPrice);
    const v2 = parseFloat(this.state.finalPrice);
    let result;
    let equation;
    if (v1 > v2) {
      result = ((v1 - v2) / Math.abs(v1)) * 100;
      result = result.toFixed(2) + "% decrease";
      equation = `((${v1} - ${v2})/${Math.abs(v1)}) * 100`;
    } else if (v1 < v2) {
      result = ((v2 - v1) / Math.abs(v1)) * 100;
      result = result.toFixed(2) + "% increase";
      equation = `((${v2} - ${v1})/|${Math.abs(v1)}|) * 100`;
    } else if (v1 === v2) {
      result = "0% change";
    }
    this.setState({ change: result, formula: equation });
    event.preventDefault();
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h2">
          Percentage Change
        </Typography>
        <form onSubmit={this.calculate}>
          <TextField
            value={this.state.initPrice}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="initPrice"
            label="Initial Price"
            name="initPrice"
            autoComplete="initPrice"
            autoFocus
          />
          <TextField
            value={this.state.finalPrice}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="finalPrice"
            label="Final Price"
            type="finalPrice"
            id="finalPrice"
            autoComplete="finalPrice"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Calculate
          </Button>
        </form>
        <Typography component="h1" variant="h5">
          {this.state.formula}
        </Typography>
        <Typography component="h1" variant="h3">
          {this.state.change}
        </Typography>
        {/* `sum_(i=1)^n i^3=((n(n+1))/2)^2` */}
      </Container>
    );
  }
}

export default PercentageChange;
