import {
  useMemo,
  useReducer,
  useCallback,
  Fragment,
  useEffect
} from 'react';
import { StarIcon } from './StarIcon.jsx';
import { reducer } from './reducer.jsx';
import css from '../styles/style.module.css';


function isTouchDevice() {
  return (
    (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) ||
    'ontouchstart' in window ||
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0)
  );
}

export function Rating({
  onClick,
  onPointerMove,
  onPointerEnter,
  onPointerLeave,
  initialValue = 0,
  iconsCount = 5,
  size = 40,
  readonly = false,
  rtl = false,
  customIcons = [],
  allowFraction = false,
  style,
  className = 'react-simple-star-rating',
  transition = false,

  allowHover = true,
  disableFillHover = false,

  fillIcon = null,
  fillColor = '#ffbc0b',
  fillColorArray = [],
  fillStyle,
  fillClassName = 'filled-icons',

  emptyIcon = null,
  emptyColor = '#cccccc',
  emptyStyle,
  emptyClassName = 'empty-icons',

  allowTitleTag = true,
  showTooltip = false,
  tooltipDefaultText = 'Your Rate',
  tooltipArray = [],
  tooltipStyle,
  tooltipClassName = 'react-simple-star-rating-tooltip',

  SVGclassName = 'star-svg',
  titleSeparator = 'out of',
  SVGstyle,
  SVGstorkeWidth = 0,
  SVGstrokeColor = 'currentColor'
}) {
  const [{ ratingValue, hoverValue, hoverIndex, valueIndex }, dispatch] = useReducer(reducer, {
    hoverIndex: 0,
    valueIndex: 0,
    ratingValue: initialValue,
    hoverValue: null
  });

  useEffect(() => {
    if (initialValue) {
      dispatch({ type: 'MouseClick', payload: 0 });
    }
  }, [initialValue]);

  const totalIcons = useMemo(() => (allowFraction ? iconsCount * 2 : iconsCount), [allowFraction, iconsCount]);

  const localRating = useMemo(() => {
    if (initialValue > totalIcons) return 0;
    if (!allowFraction && Math.floor(initialValue) !== initialValue) {
      return Math.ceil(initialValue) * 2 * 10;
    }
    return Math.round((initialValue / iconsCount) * 100);
  }, [allowFraction, initialValue, iconsCount, totalIcons]);

  const localRatingIndex = useMemo(() => (allowFraction ? initialValue * 2 - 1 : initialValue - 1) || 0, [
    allowFraction,
    initialValue
  ]);

  const renderValue = useCallback(
    (value) => (iconsCount % 2 !== 0 ? value / 2 / 10 : (value * iconsCount) / 100),
    [iconsCount]
  );

  const handlePointerMove = (event) => {
    const { clientX, currentTarget } = event;
    const { left, right, width } = currentTarget.children[0].getBoundingClientRect();
    const positionX = rtl ? right - clientX : clientX - left;

    let currentValue = totalIcons;
    const iconWidth = Math.round(width / totalIcons);

    for (let i = 0; i <= totalIcons; i += 1) {
      if (positionX <= iconWidth * i) {
        currentValue = i;
        break;
      }
    }

    const index = currentValue - 1;
    if (currentValue > 0) {
      dispatch({ type: 'PointerMove', payload: (currentValue * 100) / totalIcons, index });
      if (onPointerMove && hoverValue) {
        onPointerMove(renderValue(hoverValue), index, event);
      }
    }
  };

  const handlePointerEnter = (event) => {
    if (onPointerEnter) onPointerEnter(event);
    if (!isTouchDevice()) return;
    handlePointerMove(event);
  };

  const handleClick = (event) => {
    if (hoverValue) {
      dispatch({ type: 'MouseClick', payload: hoverValue });
      if (onClick) onClick(renderValue(hoverValue), hoverIndex, event);
    }
  };

  const handlePointerLeave = (event) => {
    if (isTouchDevice()) handleClick();
    dispatch({ type: 'PointerLeave' });
    if (onPointerLeave) onPointerLeave(event);
  };

  const valuePercentage = useMemo(() => {
    if (allowHover) {
      if (disableFillHover) {
        const currentValue = (ratingValue && ratingValue) || localRating;
        return hoverValue && hoverValue > currentValue ? hoverValue : currentValue;
      }
      return (hoverValue && hoverValue) || (ratingValue && ratingValue) || localRating;
    }
    return (ratingValue && ratingValue) || localRating;
  }, [allowHover, disableFillHover, hoverValue, ratingValue, localRating]);

  useEffect(() => {
    if (tooltipArray.length > totalIcons) {
      console.error('tooltipArray Array length is bigger then Icons Count length.');
    }
  }, [tooltipArray.length, totalIcons]);

  const ratingArray = useCallback(
    (array) => (
      (hoverValue && array[hoverIndex]) ||
      (ratingValue && array[valueIndex]) ||
      (initialValue && array[localRatingIndex])
    ),
    [hoverValue, hoverIndex, ratingValue, valueIndex, initialValue, localRatingIndex]
  );

  const ratingRenderValues = useMemo(() => (
    (hoverValue && renderValue(hoverValue)) ||
    (ratingValue && renderValue(ratingValue)) ||
    (initialValue && renderValue(localRating))
  ), [hoverValue, renderValue, ratingValue, initialValue, localRating]);

  return (
    <span className={css.starRatingWrap} style={{ direction: rtl ? 'rtl' : 'ltr' }}>
      <span
        className={`${css.simpleStarRating} ${className}`}
        style={{ cursor: readonly ? '' : 'pointer', ...style }}
        onPointerMove={readonly ? undefined : handlePointerMove}
        onPointerEnter={readonly ? undefined : handlePointerEnter}
        onPointerLeave={readonly ? undefined : handlePointerLeave}
        onClick={readonly ? undefined : handleClick}
        aria-hidden='true'
      >
        <span
          className={`${css.emptyIcons} ${emptyClassName}`}
          style={{ color: emptyColor, ...emptyStyle }}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <Fragment key={index}>
              {customIcons[index]?.icon || emptyIcon || (
                <StarIcon
                  SVGclassName={SVGclassName}
                  SVGstyle={SVGstyle}
                  SVGstorkeWidth={SVGstorkeWidth}
                  SVGstrokeColor={SVGstrokeColor}
                  size={size}
                />
              )}
            </Fragment>
          ))}
        </span>

        <span
          className={`${css.fillIcons} ${fillClassName}`}
          style={{
            [rtl ? 'right' : 'left']: 0,
            color: ratingArray(fillColorArray) || fillColor,
            transition: transition ? 'width .2s ease, color .2s ease' : '',
            width: `${valuePercentage}%`,
            ...fillStyle
          }}
          title={allowTitleTag ? `${ratingRenderValues} ${titleSeparator} ${iconsCount}` : undefined}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <Fragment key={index}>
              {customIcons[index]?.icon || fillIcon || (
                <StarIcon
                  SVGclassName={SVGclassName}
                  SVGstyle={SVGstyle}
                  SVGstorkeWidth={SVGstorkeWidth}
                  SVGstrokeColor={SVGstrokeColor}
                  size={size}
                />
              )}
            </Fragment>
          ))}
        </span>
      </span>

      {showTooltip && (
        <span
          className={`${css.tooltip} ${tooltipClassName}`}
          style={{ [rtl ? 'marginRight' : 'marginLeft']: 20, ...tooltipStyle }}
        >
          {(tooltipArray.length > 0 ? ratingArray(tooltipArray) : ratingRenderValues) || tooltipDefaultText}
        </span>
      )}
    </span>
  );
}
