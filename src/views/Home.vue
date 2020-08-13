<template>
    <span>
        <AppNavigation></AppNavigation>
        <home-hero></home-hero>
        <home-details></home-details>
    </span>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';

export default {
    name: 'home',
    components: {
        AppNavigation,
        HomeHero,
        HomeDetails
    }
};
</script>
