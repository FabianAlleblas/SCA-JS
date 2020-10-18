import createElement from './createElement'
import './Energy.css'
import graphImg from './assets/image.png'

export default function Energy({ target, hidden = true }){
    const el = createElement({ type: 'main', className: 'main-scrolling p-3 grid-30', target })
    const graphContainer = createElement({ type: 'section', className: 'graph', target: el })
    heading({ text: 'Energy Level throughout the day', target: graphContainer })
    const graphImage = createElement({ type: 'img', className: 'graph__image w-100', target: graphContainer })
    graphImage.src = graphImg
    const graphTags = createElement({ type: 'ul', className: 'graph__tag mt-1', target: graphContainer })
    graphTags.innerHTML = `
        <li class="graph__tag-item1 mr-1">Other Students</li>
        <li class="graph__tag-item2">You</li>
        `
    const energyContainer = createElement({ type: 'section', className: 'energy', target: el })
    heading({ text: 'Rate your current energy level', target: energyContainer })
    const energyRatingSelector = createElement({ type: 'ul', className: 'energy__rating grid-10', target: energyContainer })
    energyRatingSelector.innerHTML = `
                <li class="energy__rating-item w-100">100%</li>
                <li class="energy__rating-item w-100 mid1">75%</li>
                <li class="energy__rating-item w-100 mid2">50%</li>
                <li class="energy__rating-item w-100 low">25%</li>
                `
                
    function heading({ text, target }){
        const energyHeading = createElement({type: 'h3', className:'graph__heading mb-1', target })
        energyHeading.textContent = text
    }

    hidden && hide()

    function show() {
        el.classList.remove('hidden')
    }
    
    function hide() {
        el.classList.add('hidden')
    }
    
    return {show, hide}
    

}