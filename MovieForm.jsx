// Import necessary dependencies and components
import { func } from 'prop-types';
import StyledForm from './styled-movie-form';
import { StyledSection } from 'components/Section/styled-section';
import { StyledContainer } from 'components/Container/styled-container';

const MovieForm = ({ onSubmit, onChange, query }) => {
  return (
    <StyledSection>
      <StyledContainer>
        {/* Form component for movie search */}
        <StyledForm onSubmit={onSubmit}>
          {/* Input field for entering the search query */}
          <input
            type="text"
            placeholder="movie search"
            name="query"
            onChange={onChange} // Triggered when input value changes
            value={query} // Current value of the input field
          />
          <button aria-label="search" type="submit"></button> {/* Search button */}
        </StyledForm>
      </StyledContainer>
    </StyledSection>
  );
};

MovieForm.propTypes = {
  onSubmit: func.isRequired,
};

export default MovieForm;
