import React from 'react';
import { connect } from 'react-redux';
import { Display, WhenAnswer, WhenError, WhenLoading } from './Display/display';
import Button from '@material-ui/core/Button';

const GetData = () => ({ type: 'SERVER_START' });

class App extends React.Component {
  render() {
    return (
      <>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick = {() => this.props.dispatch(GetData())}>
            Show Data
        </Button>
        <Display ifLoading={this.props.loading} ifError={this.props.error}>        
          <WhenAnswer>           
            <h1>{this.props.data}</h1>       
          </WhenAnswer>        
          <WhenLoading>           
            <img src={require('../assets/news_spinner.gif')} alt="loading..." style={{ display: "block"}} />
          </WhenLoading>  
          <WhenError>           
            <h1>Error, try again</h1>
          </WhenError>  
        </Display>
      </>
    )
  };
}

export default connect( state => state )(App);


