import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

class Thesaurus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      synonyms: []
    };
  }

  handleChange = event => {
    this.setState({ word: event.target.value });
  };

  // using MERRIAM-WEBSTER API
  // dictionary key 8869e4dc-d677-4abb-8712-74c7f90a2116
  // theasurus key 862e489f-c41f-4b0a-bdee-fd6ae20eeb16
  findSynonym = event => {
    this.setState({ synonyms: [] });
    (async () => {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${this.state.word}?key=862e489f-c41f-4b0a-bdee-fd6ae20eeb16`
      );
      const data = await response.json();
      for (let i in data) {
        for (let j in data[i]["meta"]["syns"][0]) {
          const newSynonyms = this.state.synonyms;
          newSynonyms.push(data[i]["meta"]["syns"][0][j]);
          this.setState({
            synonyms: newSynonyms
          });
        }
      }
    })();
    event.preventDefault();
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h2">
          Thesaurus
        </Typography>
        <form onSubmit={this.findSynonym}>
          <TextField
            value={this.state.word}
            onChange={this.handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="word"
            label="Word"
            name="word"
            autoComplete="word"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Synonyms
          </Button>
        </form>
        {this.state.synonyms.map(word => (
          <Typography component="h1" variant="h5" key={word}>
            {word}
          </Typography>
        ))}
      </Container>
    );
  }
}

export default Thesaurus;
