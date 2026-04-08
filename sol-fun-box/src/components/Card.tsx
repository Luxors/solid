import { plural } from '../utils/plural';
import { ICard } from '../utils/types';

import catImage from '../assets/images/cat.png';

export default function Card(props: ICard) {
  return (
    <article>
      <div class="card-wrapper">
        <div class="card-background"></div>
        <div class="card-product">
          <div class="card-promo">сказочное заморское яство</div>
          <h2 class="card-title">нямушка</h2>
          <div class="card-consist">с {props.consist}</div>
          <ul class="card-includ">
            <li class="card-includ__item">
              <b class="card-includ__item--bold">{props.quantity} </b>
              порций
            </li>
            <li class="card-includ__item">
              {props.gift && <b class="card-includ__item--bold">{props.gift}</b>}{' '}
              {plural(props.gift, ['мышь', 'мыши', 'мышей'])} в подарок
            </li>
          </ul>
        </div>
        <img class="card-image" src={catImage} alt="Нямушка" />
        <div class="card-weight">
          <span class="card-weight__num">{props.weight}</span>
          <span class="card-weight__label">кг</span>
        </div>
      </div>
      {/* <footer class="card-footer">
    <CardSlogan
      slogan={card.slogan}
      isSelected={isSelected}
      isDisabled={card.isDisabled}
      onClick={toggleSelected}
    />
  </footer> */}
    </article>
  );
}
