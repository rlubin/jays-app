import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import NumberFormat from "react-number-format";

class PercentageChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initPrice: 1,
      finalPrice: 10,
      change: 0
    };
  }

  handleChange = event => {
    console.log(this.state);
    if (event.target.name === "initPrice") {
      this.setState({ initPrice: event.target.value });
    } else {
      this.setState({ finalPrice: event.target.value });
    }
  };

  calculate() {
    const i = parseFloat(this.state.initPrice);
    const f = parseFloat(this.state.finalPrice);
    let result;
    if (i < f) {
      let increase = f - i;
      result = (increase / i) * 100;
    } else {
      let decrease = i - f;
      result = (decrease / i) * 100;
    }
    this.setState({ change: result });
    console.log(this.state);
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          {/* <NumberFormat thousandSeparator={true} prefix={"$"} /> */}
          <Typography component="h1" variant="h5">
            Percentage Difference
          </Typography>
          <form noValidate>
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
            <Button
              type="submit"
              fullWidth
              onChange={this.calculate}
              variant="contained"
              color="primary"
            >
              Calculate
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
        <Typography component="h1" variant="h1">
          {this.state.change} %
        </Typography>
      </Container>
    );
  }
}

export default PercentageChange;
