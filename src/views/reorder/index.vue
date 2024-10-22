<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                     <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Reorder</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
  <ion-list>
    <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
    <ion-reorder-group :disabled="false" @ionItemReorder="handleReorder($event)">
      <ion-item>
        <ion-label> Item 1 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 2 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 3 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 4 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>

      <ion-item>
        <ion-label> Item 5 </ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup },
    setup() {
      const handleReorder = (event: CustomEvent) => {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        event.detail.complete();
      };

      return { handleReorder };
    },
  });
  
</script>

