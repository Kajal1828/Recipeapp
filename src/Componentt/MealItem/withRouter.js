import { useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const match = useParams();
    
    return (
      <Component
        navigate={navigate}
        match={match}
        {...props}
        />
    );
  };
  
  return Wrapper;
};