# Mobile Performance Optimization TODO

## High Priority
- [ ] Create mobile detection hook (`hooks/use-mobile.tsx` already exists, verify usage)
- [ ] Disable hover animations on mobile devices across all components
- [ ] Reduce FloatingElements count on mobile (currently 15 elements with heavy animations)
- [ ] Optimize RecipeCard hover effects for mobile
- [ ] Optimize CategoryCard hover effects for mobile

## Medium Priority
- [ ] Implement lazy loading for recipe cards and category cards
- [ ] Add mobile-specific image sizes and loading strategies
- [ ] Reduce FeaturedRecipeSlider animations on mobile
- [ ] Optimize hero section animations for mobile
- [ ] Add conditional imports to reduce bundle size on mobile

## Low Priority
- [ ] Add performance monitoring (Lighthouse scores)
- [ ] Implement virtual scrolling for recipe lists if needed
- [ ] Optimize font loading for mobile
- [ ] Add service worker for caching if applicable

## Testing
- [ ] Test on actual mobile devices
- [ ] Measure Core Web Vitals improvements
- [ ] Verify no functionality loss on mobile
