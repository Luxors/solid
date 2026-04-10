import { Switch, Match } from 'solid-js';

import '../assets/styles/slogan.css';

import { ICard } from '../utils/types';

interface Props extends Pick<ICard, 'isDisabled' | 'slogan'> {
  isSelected?: boolean;
  click?: () => void;
}

export default function Slogan(props: Props) {
  function handleClick(e: MouseEvent): void {
    e.stopPropagation();
    if (props.click) props.click();
  }

  return (
    <p
      class="card-slogan"
      classList={{
        'card-slogan--disabled': props.isDisabled,
      }}
    >
      <Switch>
        <Match when={props.isDisabled}>Печалька, с курой закончился.</Match>
        <Match when={props.isSelected && !props.isDisabled && props.slogan}>{props.slogan}</Match>
        <Match when={!props.isDisabled && !props.isSelected}>
          Чего сидишь? Порадуй котэ,
          <button type="button" class="card-slogan__btn" onClick={handleClick}>
            купи.
          </button>
        </Match>
      </Switch>
    </p>
  );
}
