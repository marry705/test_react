import { Children } from 'react'; 

const findChild = (children, child) => Children.toArray(children).filter(c => c.type === child )[0];

const WhenAnswer = ( { children } ) => Children.only(children);
const WhenError = ( { children } ) => Children.only(children);
const WhenLoading = ( { children } ) => Children.only(children);

const Display = ({ ifLoading = true, ifError = false, children }) => (ifLoading) ?        
  findChild(children, WhenLoading) : (ifError) ?   
      findChild(children, WhenError) :
      findChild(children, WhenAnswer)

export { Display, WhenAnswer, WhenError, WhenLoading };