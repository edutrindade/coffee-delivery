import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import coffeeLogoImg from '../../assets/coffee-logo.png';
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';

export function Header() {
    const { cartQuantity } = useCart();
    return (
        <HeaderContainer>
            <div className='container'>
                <NavLink to='/'>
                    <img src={coffeeLogoImg} alt='' width='fill' height={80} />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant='purple'>
                        <MapPin size={20} weight='fill' />
                        Diamantina, MG
                    </HeaderButton>
                    <NavLink to='/completeOrder'>
                        <HeaderButton variant='yellow'>
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight='fill' />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    );
}
