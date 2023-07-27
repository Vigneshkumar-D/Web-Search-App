import {ListItem, Title, Anchor, Description} from './styledComponent'

const SearchItem = props => {
    const {eachItem} = props
    const {title, link, snippet} = eachItem
    return(
        <ListItem>
            <Anchor href={link} target = "_blank">
            <Title>{title}</Title>
            </Anchor>
            <Anchor href={link} target = "_blank">{link}</Anchor>
            <Description>{snippet}</Description>
        </ListItem>
    )
}
export default SearchItem