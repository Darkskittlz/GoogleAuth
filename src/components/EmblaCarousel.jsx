import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselArrowButtons'




const slides = [
  { Emblaimage: "/LargeTransparent_uWu.png", heading: "Sukuna" },
  { Emblaimage: "/men_logo2.png", heading: "Sukuna" },
  { Emblaimage: "/GamerGirlLogo.png", heading: "Sukuna" },
];

const EmblaCarousel = (props) => {
  const { options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })


  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    const selectedIndex = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(selectedIndex);
    emblaThumbsApi.scrollTo(selectedIndex);
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return
    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    onSelect()
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla flex flex-col items-center justify-center h-auto min-h-screen sm:h-auto">
      <h1 className='text-white text-xl z-40'>COSMATE OF THE MONTH</h1>
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slides, index) => (
            <div className="embla__slide" key={index}>
              <img src={slides.Emblaimage} alt={`Slide ${index + 1}`} className="embla__slide__img" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
              >
                <img src={slide.Emblaimage} alt={`Thumb ${index + 1}`} className="embla__thumb__img" />
              </Thumb>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
