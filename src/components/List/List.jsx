import React,{useState , useEffect , createRef} from "react";
import { CircularProgress , Grid , Typography , InputLabel, MenuItem , FormControl , Select } from "@mui/material";
import { styled } from '@mui/system';
import { ClassNames } from "@emotion/react";
import PlaceDetails from '../PlaceDetails/PlaceDeatils'

const ListContainer = styled('div')({
    padding: '25px',
  });

const FormController = styled(FormControl)({
    margin: '8px', 
    minWidth: 120, 
    marginBottom: '30px',
  });

const GridContainer = styled(Grid)({
    height: '75vh',
    overflow: 'auto',
  });

const LoadingContainer = styled('div')({
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
})

const List = ({places , childClicked , isLoading , type, setType, rating, setRating}) => {
    
    const [elRefs , setElRefs] = useState([]);
    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs);
    } , [places]);
    return (
        <ListContainer>
            <Typography variant='h4'>Restaurants , Hotels & Attractions around you</Typography>
            {isLoading ? (
        <LoadingContainer>
          <CircularProgress size="5rem" />
        </LoadingContainer>
      ) : (
        <>
            <FormController>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormController>

            <FormController>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormController>

            <GridContainer container spacing={3}>
                {places?.map((place, i) => (
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails 
                        place={place}
                        selected={Number(childClicked) === i}
                        refProp = {elRefs[i]}
                        />
                    </Grid>
                ))}
            </GridContainer>
            </>
      )}
        </ListContainer>
    );
};

export default List;