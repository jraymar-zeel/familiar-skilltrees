import React, { Component } from "react";
import styles from "./style.module.scss";
import R20 from "components/R20_UI/R20";

type Props = { familiar: R20; castHandler: (event: any) => void };
type State = {};

class SpellScroll extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.scroll}>
        <div className={styles.scroll_border}></div>
        <div className={styles.scroll_page}>
          <div className={styles.scroll_wrapper}>
            <div className={styles.header}>
              <div className={styles.title}>
                <span>Find Familiar</span>
                <button
                  className={styles.cast_button}
                  onClick={this.props.castHandler}
                >
                  CAST
                </button>
              </div>
              <i>1st level conjuration (ritual)</i>
            </div>
            <p>
              <span>
                <b>Casting Time: </b>
                {this.props.familiar.display_cast_time()}
              </span>
              <br />
              <span>
                <b>Range:</b>
                {this.props.familiar.display_cast_range()}
              </span>
              <br />
              <span>
                <b>Components: </b>
                {this.props.familiar.display_component_cost()}
              </span>
              <br />
              <span>
                <b>Duration: </b>Instantaneous
              </span>
            </p>
            <p>
              You gain the service of a familiar, a spirit that takes the form
              of a mechanical modron though it is a celestial, fey, or fiend
              (DM's discretion) instead of a beast.
            </p>
            <p>
              Your familiar acts independently of you, but it always obeys your
              commands. In combat, it rolls its own initiative and acts on its
              own turn. (Subject to change at DM's discretion for convenience).
              A familiar can’t attack, but it can take other actions as normal.
            </p>
            <p>
              When the familiar drops to 0 hit points, it disappears, leaving
              behind no physical form. It reappears after you cast this spell
              again.
            </p>
            <p>
              While your familiar is within {this.props.familiar.range} feet of
              you, you can communicate with it telepathically. Additionally, as
              an action, you can see through your familiar’s eyes and hear what
              it hears until the start of your next turn, gaining the benefits
              of any special senses that the familiar has. During this time, you
              are deaf and blind with regard to your own senses.
            </p>
            <p>
              As an action, you can temporarily dismiss your familiar. It
              disappears into a pocket dimension where it awaits your summons.
              Alternatively, you can dismiss it forever. As an action while it
              is temporarily dismissed, you can cause it to reappear in any
              unoccupied space within 30 feet of you.
            </p>
            <p>
              You can’t have more than one familiar at a time. If you cast this
              spell while you already have a familiar, you instead cause it to
              adopt a new form. Choose one of the forms from the above list.
              Your familiar transforms into the chosen creature.
            </p>
            <p>
              Finally, when you cast a spell with a range of touch, your
              familiar can deliver the spell as if it had cast the spell. Your
              familiar must be within {this.props.familiar.range} feet of you,
              and it must use its reaction to deliver the spell when you cast
              it. If the spell requires an attack roll, you use your attack
              modifier for the roll.
            </p>
          </div>
        </div>
        <div className={styles.scroll_border}></div>
      </div>
    );
  }
}

export default SpellScroll;
