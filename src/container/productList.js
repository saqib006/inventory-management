import React, {Component} from 'react';
import { ListItem, ListItemText, IconButton, ListItemIcon} from '@material-ui/core';
import DeleteIcon  from '@material-ui/icons/Delete';
import EditIcon  from '@material-ui/icons/Edit';

class ProductList extends Component{

    

    render(){
        return(
            <div key={this.props.id}>
                     <ListItem>
                        <ListItemText>
                            {this.props.product.name}
                        </ListItemText>
                        <ListItemText>
                            {this.props.product.description}
                        </ListItemText>
                        <ListItemText>
                        {this.props.product.manufacturer}
                        </ListItemText>
                        <ListItemIcon>
                        <IconButton>
                        <EditIcon onClick={this.props.editHandler}/>
                        </IconButton>
                            
                            
                        </ListItemIcon>
                        <ListItemIcon>
                        <IconButton onClick={this.props.delete}>
                        <DeleteIcon />
                        </IconButton>
                            
                        </ListItemIcon>
                        
                    </ListItem>

                    
            </div>
        )
    }
}

export default ProductList;