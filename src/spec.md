# Specification

## Summary
**Goal:** Add a new Property Gallery item for “High Capacity 26 Passenger Lifts” using the uploaded elevator-lobby image, placed immediately after “Terrace / Rooftop”.

**Planned changes:**
- Add the uploaded elevator image as a static frontend asset at `frontend/public/assets/generated/high-capacity-26-passenger-lifts.dim_1536x1024.png`.
- Update the Property Gallery list to insert a new card directly after “Terrace / Rooftop”, labeled exactly “High Capacity 26 Passenger Lifts”, referencing the new asset via `/assets/generated/...`.
- Provide English alt text for the new gallery image describing the image content.

**User-visible outcome:** In the Property Gallery, users will see a new “High Capacity 26 Passenger Lifts” card immediately after “Terrace / Rooftop”, displaying the uploaded elevator image without any broken links.
