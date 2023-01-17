import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FilterWrapper, Input } from './Filter.styled';
import { SubTitle } from 'components/SubTitle/SubTitle.styled';

function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <SubTitle>Find contacts by name</SubTitle>
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </FilterWrapper>
  );
}

export default Filter;
