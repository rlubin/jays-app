import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class Thesaurus extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h2">
            Thesaurus
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
              type="button"
              fullWidth
              onClick={this.calculate}
              variant="contained"
              color="primary"
            >
              Calculate
            </Button>
          </form>
        </div>
        <Typography component="h1" variant="h5">
          {this.state.formula}
        </Typography>
        <Typography component="h1" variant="h3">
          {this.state.change}
        </Typography>
      </Container>
    );
  }
}

export default Thesaurus;
